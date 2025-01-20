import { formatDate } from '../../utils/formatDate';

const Reservation = ({ reservation }) => {
    const { text: reservationText, rating, author, updatedAt } = reservation;

    if (reservationText === '') {
        return (
            <p>
                {rating}/5 stars -- {author.username}, {formatDate(updatedAt)}
            </p>
        );
    }

    return (
        <p>
            {reservationText}
            <br />
            {rating}/5 stars -- {author.username}, {formatDate(updatedAt)}
        </p>
    );
}; 

export default Reservation;
