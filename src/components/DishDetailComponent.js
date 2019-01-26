import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderComments({comments}) {
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

    function RenderDish({dish}) {
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

    const  DishDetail = (props) => {
        const { dish } = this.props;
        if (props.dish != null) {
            return (
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments= {props.dish.comments} />
                </div>
            );
        } else {
            return <div />;
        }
    }

export default DishDetail;