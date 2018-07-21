import React, { Component } from 'react';
import Comment from './Comment';
import './style.css';


class Board extends Component{
constructor(props)
{super(props);
this.state= {
comments:[]
};
this.RemoveComment=this.RemoveComment.bind(this);
this.updateComment=this.updateComment.bind(this);
}
updateComment(text,i)
{var arr=this.state.comments;
arr[i]=text;
this.setState({comments:arr});
}
eachcomment(text,i)
{
return(
<Comment key={i} index={i} delete={this.RemoveComment} update={this.updateComment}>
{text}
</Comment>
);
}

RemoveComment(i)
{var arr=this.state.comments;
arr.splice(i,1);
this.setState({comments:arr});
}
Add(text)
{var arr=this.state.comments;
arr.push(text);
this.setState({comments:arr});
}
render() {return( 
<div>
<button onClick={this.Add.bind(this, 'Write Here')} id='but'>Add</button>
<div className="board">
{this.state.comments.map(this.eachcomment.bind(this))}
</div>
</div>
);

}
};

export default Board;

