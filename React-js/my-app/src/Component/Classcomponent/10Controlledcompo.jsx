import React from 'react';
import { Component } from 'react';

class Controlledcompo extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            details: "",
            select: ""
        }
    }

    submit = (event) => {
        event.preventDefault()
        console.log(this.state.name);
        console.log(this.state.details);
        console.log(this.state.select);
    }

    // change = (e) =>{
    //     // e.preventDefault()
    //     this.setState({name : e.target.value})
    // }

    render() {
        return (
            <>

                <h3>Controlledcompo</h3>
                <form onSubmit={this.submit}>
                    <div>
                        <input type="text" name="" id="" value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        // onChange={this.change}
                        />
                    </div>
                    <div className='my-3'>
                        <textarea name="" id="" cols="30" rows="10" value={this.state.details}
                            onChange={(e) => this.setState({ details: e.target.value })}></textarea>
                    </div>
                    <div className='my-3'>
                        {/* <label htmlFor="">Citys : </label> */}
                        <select name="Citys" id="" value={this.state.select}
                        onChange={(e)=> this.setState({select : e.target.value})}>
                            <option value="">Select City :</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Surat">Surat</option>
                            <option value="Rajkot">Rajkot</option>
                            <option value="Baroda">Baroda</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default Controlledcompo;