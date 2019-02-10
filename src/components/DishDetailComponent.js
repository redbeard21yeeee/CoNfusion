import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label,
    Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCommentForm = this.handleCommentForm.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleCommentForm(values) {
        this.ToggleModal ();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        // event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <Col md={{ size: 10, offset: 0 }}>
                    <Button outline onClick={this.toggleModal} color="." type="submit">
                        <span className="fa fa-pencil fa-lg"></span>Write Comment!
                    </Button>
                </Col>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><b>Dish Feedback!</b></ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleCommentForm(values)}>
                    <Row className="form-group">
                                <Col md={12}>
                                <Label htmlFor="Rating"><b>Rating</b></Label>
                                    <Control.select defaultValue="5" model=".Rating" id="Rating" name="Rating"
                                        className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                         </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                <Label htmlFor="Yourname"><b>Your Name</b></Label>
                                    <Control.text model=".Yourname" id="Yourname" name="Yourname"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".Yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                <Label htmlFor="message"><b>Your Comment</b></Label>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit comment
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}


function RenderComments({comments, postComment, dishId}) {
    if (comments != null) {
        const commentItems = comments.map((comment) => {
            return (
                <Fade in>
                <li key={comment.id} className='list-unstyled'>
                <div className='mb-2'>{comment.comment}</div>
                <div className='mb-2'>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                </li>
                </Fade>
            );
        });
        return (
            <div className='m-1 col-sm-12 col-md-5'>
                    <h4>Comments</h4>
                <ul>
                <Stagger>
                    {commentItems}
                </Stagger>
                </ul>
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        );
    } else {
        return <div/>
    }
}


function RenderDish({ dish }) {
    return (
        <div className='col-12 col-md-5 m-1'>
             <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

const DishDetail = (props) => {
    const { dish, comments } = props;
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={dish} />
                    <RenderComments comments={props.comments}
                    postComment={props.postComment}
                    dishId={props.dish.id}
      />
                </div>
            </div>
        );
    }


export default DishDetail;