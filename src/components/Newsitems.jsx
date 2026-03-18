import React from 'react';

export default function Newsitems(props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <>
        <div className='w-70 h-full  box-content'>
          <img className='h-40 w-full' src={!imageUrl ? "https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/268386_iPad_Air_M4_AKrales_0129.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200" : imageUrl} alt="..." />
          <span className='font-bold text-white w-fit flex  px-2 bg-indigo-700  '>{source}</span>
          <div className='p-4'>
            <h5 className='mb-2 h-20 font-bold'>{title}...</h5>
            <p className='mb-2 h-20'>{description}...</p>
            <p className='mb-2 '>By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</p>
            <button className='bg-indigo-800  px-2 py-1 mt-7 text-white rounded-sm  font-medium hover:bg-indigo-600 '>
              <a href={newsUrl} target='_blank'>Read more</a>
            </button>
          </div>
        </div>
      </>
    )
  }
