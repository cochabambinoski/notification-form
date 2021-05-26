import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            token:'',
            body:'',
            title:'',
            selectedFile: null
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onFileChange = event => { 
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
      }; 

    submitHandler = (e) => {
        let data = {
            "to": "/topics/globalTopic",
         //   "to": "e1G0E8a74dM:APA91bHEnaHKW97JyXwzVj7hJb_1PzgLk28zqsg_TV-tbT-iVNPG9nc3RW_QewPZiidoV7w6DgOzw2iX-DWKR7vYTpxPsBCkAfRwsvPm2u2xR1zuWtAflZVkzCT2KrcM0z7XZcjOv_3r",
            "notification": {
                "title": this.state.title,
                "body": this.state.body
            }
        }
        let config = {
            headers: {
                Authorization: 'Bearer AAAAndhmMls:APA91bFpyOBJrTPR0ZEEHVll_7H0qA8seXCe5-ts0YRZ8nq7k0TdCCYRchlVQ27rFUw_cs7flD2sZq9KpFZhDeXgJfCZeJXxt6qIPWEI2A2RsZVoCvNvgfzvKzEGQjBbCACXjIkhnW52'
              }
        }
        e.preventDefault()
        console.log(data)
        axios.post('https://fcm.googleapis.com/fcm/send',data,config)
    }
    submitBaner = (e) => {
        var bodyFormData = new FormData();

        bodyFormData.append('file', this.state.selectedFile);
        
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
              }
        }
        e.preventDefault()
        console.log(bodyFormData)
        axios.post('http://localhost:3000/images/upload', bodyFormData,config)
    }

    render () {
        const { title, body, urlpromo } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <h3>Cuerpo de la notificacion</h3>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <h3>Titulo de la notifiacion</h3>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div>
                <form onSubmit={this.submitBaner}>
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h3>Sube la imagen de publicidad</h3>
                            <input type="file" name="urlpromo" value={urlpromo} onChange={this.onFileChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                </div>
            </div>
        )
    }

}

export default PostForm