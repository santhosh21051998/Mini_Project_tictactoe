'use strict'
//window.alert("ok, ");
 class Square extends React.Component {
	render() {
		return (
		  <button className = "square" onClick = { this.props.onClick } >
		  {this.props.value}
		  </button>
		);
	}
	
}

/*function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}*/


class Board extends React.Component {
	constructor() {
		super();
		this.status = 'X';
		this.count = 0;
		this.ans = false;
		this.state = {
		 IsX : true,
		 square : Array(9).fill(null)
		}
	}
	 Win(square) {
	// for horizontal
	var x = 0;
    var y = 0;
	for(var i = 0; i < 9; i += 3) {
		x = 0;
		y = 0;
		for(var j = i; j < i+3; j++) {
			x += ( (square[j] == 'X') ? 1 : 0)
			y += ( (square[j] == 'O') ? 1 : 0)
		}
		 this.ans = x == 3 ? "X wins" : y == 3 ? "O wins" : false
		if( this.ans ) {
			 console.log(ans);
			 return;
			  }
	}	
   // for vertical
  for(let i = 0; i < 3; i++) {
        x = 0;
		y = 0;
        for(var j = i; j < 9; j += 3) {
		    x += ( (square[j] == 'X') ? 1 : 0)
			y += ( (square[j] == 'O') ? 1 : 0)
		}
		 this.ans = x == 3 ? "X wins" : y == 3 ? "O wins" : false
		if( this.ans ) {
			 console.log(ans);
			 return;
			  }   
	}
	// cross check
		x = 0;
		y = 0;
	  for(let i = 0; i < 9; i += 4) {
		    x += ( (square[i] == 'X') ? 1 : 0)
			y += ( (square[i] == 'O') ? 1 : 0)
		   this.ans = x == 3 ? "X wins" : y == 3 ? "O wins" : false
		if( this.ans ) {
			 console.log(this.ans);
			 return;
			  }
	  }
	    x = 0;
		y = 0;
	  for(let i = 2; i <= 6; i += 2) {
		    x += ( (square[i] == 'X') ? 1 : 0)
			y += ( (square[i] == 'O') ? 1 : 0)
		   this.ans = x == 3 ? "X wins" : y == 3 ? "O wins" : false
		if( this.ans ) {
			 console.log(this.ans);
			 return;
			  }
	  }
	 /* if( !ans )
		    console.log(" __MATCH DRAW__ "); */
	 }	
	handle(i) {
		if(this.state.square[i] == null) {
			this.count++;
		const square = this.state.square.slice();
        square[i] = this.state.IsX ? 'X' : 'O';
		this.status = square[i] == 'X' ? 'O' : 'X';
        this.setState( {square : square, IsX :  !this.state.IsX} );
		this.Win(this.state.square)
		if( this.count == 9 && !this.ans )
			      console.log("__MATCH DRAW__")
		}
		
	}
	renderSquare(i) {
		return (
		<Square value = { this.state.square[i] }
         onClick = { () => this.handle(i) }	/>
		);	
	}

render() {
    return (
      <div>
        <div className="status">{ "Next player : " + this.status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
 class Game extends React.Component {
	 render() {
		 return (
		   <div className = "game">
			<div className = "game-board">
		      <Board />
		    </div>
           </div>			
		 );
	 }
 }
 
 ReactDOM.render(
   <Game />,
   document.getElementById('root')
   );