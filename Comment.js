import React, { Component } from 'react';


import './style.css';

class Comment extends Component {
constructor(props)
{super(props);
this.state={editing:false};
this.remove=this.remove.bind(this);
this.edit=this.edit.bind(this);
this.save=this.save.bind(this);
}
remove()
{this.props.delete(this.props.index);
alert("Comment Removed");

}
edit()
{this.setState({editing:true});
}
save()
{this.props.update(this.refs.newText.value,this.props.index);
this.setState({editing:false});
}
renderNormal(){
return(
<div className="commentcontainer">
<div className="commenttext">
{this.props.children}
</div>
<pre>
<button onClick={this.remove} className="button_danger">Remove</button>
      <button onClick={this.edit} className="button_primary">edit</button>
</pre>
</div>
);
}

renderForm(){
return(<div className="commentcontainer">
<textarea ref="newText" id="how" defaultValue={this.props.children}></textarea>
<button onClick={this.save} className="button-success">Save</button>
</div>
);
}
render()
{if(this.state.editing){
return this.renderForm();
}else{
return this.renderNormal();
}
}}
export default Comment;