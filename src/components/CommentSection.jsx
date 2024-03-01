import React, { useState, useEffect } from 'react';
import commentsData from '../comment.json';
import '../pages/ticket.css';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';


function CommentSection({ ticketId }) {
  const [comment, setComment] = useState({ tid: ticketId, ComName: '', txt: '' });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      // Read the comments data from comment.json
      setComments(commentsData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setComment({ tid: ticketId, ComName: '', txt: '' });
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    try {
      // Save the comment to comment.json
      commentsData.push(comment);
      alert('Comment saved successfully');
      resetForm();
      fetchComments();
    } catch (err) {
      console.error(err);
      alert('Error saving comment');
    }
  };

  const filteredComments = comments.filter((comment) => comment.tid === ticketId);

  return (
    <>       
        <div>
            <Popup trigger=
                {<button 
                  style={{
                    backgroundColor: '#39A7FF',
                    color: '#000',
                    padding:12,
                    border:0,
                    display:'flex',
                    alignItems:'flex-start'
                  }}
                >+ افزودن کامنت </button>} 
                modal nested>
                {
                    close => (

                      <section className="form">
                      <form onSubmit={handleSubmitComment}>
                        <div className="form-group">
                          <label htmlFor="comname">نام شرکت</label>
                          <input
                            type="text"
                            name="ComName"
                            className="form-control"
                            value={comment.ComName}
                            onChange={handleCommentChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="comtxt">متن</label>
                          <textarea
                            name="txt"
                            id="comtxt"
                            className="form-control"
                            placeholder="نظر بدهید..."
                            value={comment.txt}
                            onChange={handleCommentChange}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <button className="btn btn-block">ارسال</button>
                        </div>
                      </form>
                    </section>
                    )
                }
            </Popup>
        </div>
        <section className="heading">
    <h4 style={{ textAlign: 'center'}}> نظرات</h4>


      {filteredComments.map((comment, index) => (
        <div className='commentbox'><div className='note-head'>{comment.ComName}</div>
        <div className='note'
          style={{
            backgroundColor: '#fff',
            color: '#000',
          }} key={index}><h4>
          </h4><p>{comment.txt}</p><div className='note-date'>
          </div></div></div>
       ))}






</section>
</>


)}
export default CommentSection