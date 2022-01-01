import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        // state 초기 값 설정
        this.state = {
            number : 0,
            fixedNumber : 0
        }
    }

    render() {
        const { number, fixedNumber } = this.state
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixedNumber}</h2>
                <button 
                // onclick을 통해 버튼이 호출되었을 때 호출할 함수를 지정한다.
                onClick= {() => {
                    this.setState(
                        {
                            number: number + 1
                },
                () => {
                    console.log('방금 setstate가 호출되었습니다')
                    console.log(this.state)
                }
                )
                }}
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Counter