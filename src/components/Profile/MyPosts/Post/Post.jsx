import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
   return (
      <div className={classes.item}>
         <img src='https://mirzhivotnye.ru/wp-content/uploads/2018/08/E%60rdelterer-33.jpg'></img>
         { props.message }
         <div>
            <span>like</span>
         </div>
      </div>
   );
}

export default Post;