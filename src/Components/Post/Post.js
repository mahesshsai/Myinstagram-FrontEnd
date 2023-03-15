import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './Post.css';

import love from "../../images/love.svg"; 
import comment from "../../images/comment.svg"; 
import share from "../../images/share.svg"; 
import { height } from '@mui/system';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentList:[]
         }
    }

    componentDidMount(){
        this.getComments();
    }

    getComments=()=>{ //API backend
        // let data=[
        //     {
        //         "username": "Bahubali",
        //         "commentId":"001",
        //         "timeStamp":"123456",
        //         "description":"Comment 1"
        //     },
        //     {
        //         "username": "Ram",
        //         "commentId":"002",
        //         "timeStamp":"123456",
        //         "description":"Comment 2"
        //     },
        //     {
        //         "username": "Bheem",
        //         "commentId":"003",
        //         "timeStamp":"123456",
        //         "description":"Comment 3"
        //     }
        // ];

        fetch('http://localhost:8080/comments/'+this.props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({commentList: data});
        });
        
    }
    
    submitComments =(event) =>{
        if(event.key == "Enter") {
            let comment=event.currentTarget.value;
            if(comment!= null || comment!=undefined) {

                let payload = {
                    "commentId": Math.floor(Math.random()*1000000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "postId": this.props.id,
                    "timeStamp": new Date().getTime(),
                    "comment": comment
                }
    
                const requestOptions ={
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(payload),
                }
    
                fetch("http://localhost:8080/comments",requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.getComments();
                })
                .catch(error =>{
    
                })

            }
        }
    }


    render() {
        return (
            <div className='post_container'>
                {/* header */}
                <div className='post_header'>
                    {/* <Avatar className='post_image' src={this.state.profileImage} /> */}
                    <Avatar className='post_image' src="" />
                    <div className='post_username'>{this.props.userName}</div>
                </div>

                <div>
                    <img src={this.props.postImage} width="615px" />
                </div>

                <div>
                    <div style={{"marginLeft":"10px","marginbottom":"-150px"}}>
                         <img src={love} className="post_reactimage"/>
                         <img src={comment} className="post_reactimage"/>
                         <img src={share} className="post_reactimage"/>
                    </div>
                <div style={{"margintop":"5px","margin":"15px","fontWeight":"bold"}}>
                 {this.props.likes} likes
                    </div>
                </div>
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                           
                            <div className='post_comment'>{item.userName}: {item.comment}</div>
                        ))
                    }
                    {/* <div className='post_comment'>Aw!!!!</div>
                    <div className='post_comment'>Beautiful!!</div> */}
                    <input text="text" onKeyUpCapture={this.submitComments}  className='post_commentbox' placeholder='Add a comment...' />
                </div>
              
                
            </div>
        );
    }
}

export default Post;