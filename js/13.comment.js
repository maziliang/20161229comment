var Board = React.createClass({
    getInitialState(){
        return {words: []};
    },
    handleChange(){
        this.setState({words: this.state.words.concat(this.refs.myTex.value)});
    },
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>珠峰留言板</h1>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.words.map((item, index) => {
                                return <li key={index} className="list-group-item">{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="panel-footer">
                    <input ref="myTex" type="text" className="form-control"/>
                    <button onClick={this.handleChange} className="btn btn-primary">留言</button>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Board/>, document.querySelector('#container'));