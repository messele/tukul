import React, { Component } from 'react'
import ReCAPTCHA  from 'react-google-recaptcha'
import { Form, Container, Button, Jumbotron } from "react-bootstrap";

const DELAY = 1500;
//const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const MY_SITE_KEY = "6LeAWRgUAAAAAP5c5J_NXjq6VZwtz31hquJLYI7v";
export default class ContactPage extends Component {

    constructor(props) {
        super(props)
        this._recaptchaRef = React.createRef();
        this.handleChange  = this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.state = {
            callback: "not fired",
            value: '',
            load: false,
            expired: "false"
          };
        this.userName = React.createRef();
        this.email    = React.createRef();
        this.comments = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ load: true });
        }, DELAY);
        console.debug("didMount - reCaptcha Ref-", this._reCaptchaRef);
      }
    //   fetch("http://localhost:8001/", {
    //     "headers": {
    //       "content-type": "application/json"
    //     },
    //     "referrer": "http://localhost:3000/contact",
    //     "referrerPolicy": "no-referrer-when-downgrade",
    //     "body": "{\"name\":\"foo\",\"email\":\"foo@foo.com\",\"comment\":\"This is my message\"}",
    //     "method": "POST",
    //     "mode": "cors",
    //     "credentials": "omit"
    //   });
    handleSubmit(event) {
        event.preventDefault();
        console.debug("Submitting contact comments...");
        const myHeaders = new Headers();

        // myHeaders.append('x-api-key', 'KEY_HERE');
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('cache-control', 'no-cache');
        fetch("http://localhost:8001", {
            method: 'POST',
            headers:myHeaders,
            body: JSON.stringify({
                name: this.userName.current.value, 
                email:this.email.current.value,
                comment:this.comments.current.value
            }),
            async: true
        }).then(
            res => {
                this.setState({
                    commentSubmitted: true
                })
            }
        ).catch(err => {
            this.setState({
                commentSubmitted: false,
                error: err
            })
        });
       
    }
    handleChange(value) {

        console.log("Captcha value:", value);
        this.setState({ value });
        // if value is null recaptcha expired
        if (value === null) this.setState({ expired: "true" });
    }

    render() {
        const { value, /*callback,*/ load, expired } = this.state || {};
        return (
           <Container>
            {this.state.commentSubmitted &&
            <Jumbotron>
                <div className="alert alert-success">
                    Thanks for your comment. Our support team will get back to you shortly.
                </div>
            </Jumbotron>
            }
            { !this.state.commentSubmitted  &&
             <Form onSubmit={this.handleSubmit} method="Post" action="http://localhost:8001">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={this.userName} type="text" placeholder="enter name" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control ref={this.email}type="email" placeholder="enter email"  required/>
                        <Form.Text className="text-muted">
                            We will never share your email with any one.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control ref={this.comments} as="textarea" rows="5"  required/>
                    </Form.Group>
                    {/* <div>
                        {value} {"" + load} {expired}
                    </div> */}
                    {this.state.error && 
                        <div class="alert alert-danger" role="alert">
                            Failed to register comment. Please try again.
                        </div>
                    }
                    <div>
                     {load &&   <ReCAPTCHA
                                    style={{ display: "inline-block" }}
                                    theme="dark"
                        ref = {this._recaptchaRef}
                        sitekey={MY_SITE_KEY}//
                        onChange = {this.handleChange}
                        />
                     }
                     </div>
                    <Button   className="btn btn-primary" type="submit" disabled={false && (!value || !expired || !load)}>Submit</Button>
                </Form>
                    }
                </Container>
        )
    }
}