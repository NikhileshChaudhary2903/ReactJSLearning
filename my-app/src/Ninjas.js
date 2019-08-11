import React from 'react';

// class Ninjas extends Component {

//     render() {
//         // console.log(this.props); 
//         const {ninjas} = this.props;
//         const ninjaList = ninjas.map(ninja => {
//             return (
//            <div className = "Ninja" key = {ninja.id}> 
//             <div> Name: {ninja.name} </div>
//             <div> Age: {ninja.age} </div>  
//             <div> Belt: {ninja.belt} </div>        
//             </div> 
//             )
//         })
//         return (
//             <div className = 'ninja-list'>
//                 {ninjaList}
//             </div>    
//         )

//     }
// }

// functional component ie UI Component classless
const Ninjas = (props) => {

        // console.log(this.props); 
        const {ninjas} = props;
        const ninjaList = ninjas.map(ninja => {
            return (ninja.age > 24) ? (
           <div className = "Ninja" key = {ninja.id}> 
            <div> Name: {ninja.name} </div>
            <div> Age: {ninja.age} </div>  
            <div> Belt: {ninja.belt} </div>        
            </div> 
            ) : null;
        })
        return (
            <div className = 'ninja-list'>
                {ninjaList}
            </div>    
        )
    }

export default Ninjas;