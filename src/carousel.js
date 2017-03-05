import React from "react"

import "./main.css"



class Carousel extends React.Component{
  constructor(){
    super();
    this.state={
      nowScroll:0    //初始状态  第一张图片nowScroll 为0
    }
  }
  scroll(n){         //定义`scroll`方法，目的是判断并改变`this.state.scroll`的值

    let text=this.state.nowScroll+Number(n);
    console.log("text======",text);
    if(text>=this.props.imgs.length){
      return this.setState({nowScroll:0})
    }
    if(text<0){
      return this.setState({nowScroll:this.props.imgs.length-1})
    }
      return this.setState({nowScroll:text})
      console.log("text1======",text);
  }
  handleClick(n){
    clearInterval(this.interval);
    this.scroll(n)
    this.goPlay()
  }
  newBtnClick(index){
    clearInterval(this.interval);
    this.setState({nowScroll:index})
    this.goPlay()
  }
  goPlay(){    //设置定时器
    this.interval=setInterval(()=>this.scroll(1),this.props.time)
  }
  componentDidMount(){      //在首次渲染之后，调用定时器
    this.goPlay()
  }
  render(){
    console.log(this.state.nowScroll);
    let liWidth=100/this.props.imgs.length+"%";
    let styles={
      ul:{
        width:this.props.imgs.length*100+"%",
        left:-this.state.nowScroll*100+"%"
      }
    }
    return(
      <div className="showPic">
        <ul style={styles.ul}>
          {this.props.imgs.map(item=><li key={Math.random()} style={{backgroundImage:`url(${item})`,width:liWidth}}></li>)}
        </ul>
        <div className="btn left" onClick={this.handleClick.bind(this,-1)}>←</div>
        <div className="btn right" onClick={this.handleClick.bind(this,1)}>→</div>
        <div className="newBtn">
          {
            this.props.imgs.map((item,index)=><span key={Math.random()}
            onClick={this.newBtnClick.bind(this,index)}
            style={{backgroundColor:this.state.nowScroll===index?"red":"blue"}}></span>)
          }
        </div>
      </div>
    )
  }
}



export default Carousel;
