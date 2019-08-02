import React, { Component } from 'react'
import axios from 'axios';

class Details extends Component {
    constructor(props){
        super(props);

        this.state={
            blog: null,
        };
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const blog = (await axios.get(`http://localhost:8000/api/react/${params.pk}`)).data;
        console.log(blog)
        this.setState({
          blog,
        });
      }

    render() {
        const {blog} = this.state;

        if (blog === null) return <p>Loading ...</p>;
        return (
            <div>
                <h1>{blog.title}</h1>
            </div>
        )
    }
}

export default Details;
