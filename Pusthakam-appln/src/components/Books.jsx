import React from 'react'

const Books = ({books}) => {
    return(
    <div>
        {
            books.map((ele)=>(
                <div>
                    <h3>{ele.title}</h3>
                    <h5>Authors</h5>
                    {
                        ele.authors.map((authors)=>(
                            <p>{authors}</p>
                        ))
                    }
                    <p>categories : {ele.category}</p>
                </div>
            ))
        }
    </div>
    )
}

export default Books