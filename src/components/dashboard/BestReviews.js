// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import BestReviewsSummary from '../service/summary/BestReviewsSummary';

// class BestReviews extends Component {
//   render() {
//     const { bests } = this.props;
//     return (
//       <div className="BestReviews container">
//         <p className='center flow-text scorehvy'>베스트 후기모음</p>
//         <div className="row">
//           { bests && bests.map(item => {
//             return (
//               <Link to={`/thema/${item.category}/${item.id}`} key={item.src}>
//                 <BestReviewsSummary best={item} />
//               </Link>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }
// }

// export default BestReviews;



// 19.09.27 이후 잠시 kill down