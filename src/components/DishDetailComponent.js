import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardImg} from 'reactstrap';

export default class DishDetail extends Component {
    renderComments(comments) {
        if (comments != null) {
            const commentItems = comments.map((comment) => {
                return (
                    <li key={comment.id} className='list-unstyled'>
                        <div className='mb-2'>{comment.comment}</div>
                        <div className='mb-2'>--{comment.author} {comment.date}</div>
                    </li>
                );
            });

            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul>
                        {commentItems}
                    </ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    renderDish(dish) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </Card>
            </div>
        );
    }

    render() {
        const { dish } = this.props;
        if (dish != null) {
            return (
                <div className='row'>
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>
            );
        } else {
            return <div />;
        }
    }
}
