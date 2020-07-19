import React from 'react';
import '../assets/styles/components/CarouselItem.scss'
import PropTypes from 'prop-types';
const CarouselItem = ({cover, title, year, contentRating, duration}) => (
    <div className="carousel-item">
        <img className="carousel-item__img"
             src={cover}
             alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img"
                         src="https://img.icons8.com/flat_round/64/000000/play--v1.png" alt="play"/>
                    <img className="carousel-item__details--img"
                         src="https://img.icons8.com/flat_round/64/000000/plus.png" alt="plus"/>
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
    </div>
)

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

export default CarouselItem
