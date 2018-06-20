import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

export class Youtube extends Component {

    constructor(props) {
        super(props);
        this.state = { video_list: []};


    }
    componentWillMount() {

        /*TODO: move to hangle change function*/
        const api = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=nasa&type=video&videoDefinition=high&key=AIzaSyAzhkrAEax-6glljYL4U1GaEOwjSyydEpk';




        const video_list =  fetch(api).then(
            function (response) {
                return response.json();
            }
        ).then( (jsonData) =>{
            /*todo just get vids list */
            console.log("***************** Data from api **************** ");
            console.log(jsonData.items);
            this.setState({video_list: jsonData.items});
            return jsonData.items

        });

    }

    handleChange(e) {
        /*let term = e.target.value;
        this.props.changeTitle(term);
        this.video = term;
        debugger
        var element = document.getElementById('player');
        this.loadClientWhenGapiReady(null, term);
        if (element) {

            element.src = 'https://www.youtube.com/embed/' + this.video + '?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=1';

        }*/


    }

    render() {
        if (!this.state.video_list.length) {
            return (
                <p>Loading</p>
            );
        }
        return (
            <div className="Youtube">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBar/>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-9">
                            <VideoPlayer/>

                        </div>
                        <div className="col-md-3">
                            <VideoList videList={this.state.video_list}/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Youtube;
