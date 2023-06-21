import React from 'react';

import './App.css';

import { useGetCommentsQuery } from './store/api/api';

import { DisplayComments } from './components/DsiplayComments/DisplayComments';
import { NewCommentForm } from './components/from/NewCommentForm';

const App: React.FC = () => {

  const {isLoading, isError, isSuccess, data, error} = useGetCommentsQuery(null)

  return (
    <div className="App">
      {isLoading ? <h1 className='loading_title'>Loading...</h1> : null}

      {isSuccess && typeof data.comments !== "number" ? 
        <div>
          <DisplayComments comments={data.comments}/>
          <NewCommentForm comments={data.comments}/>
        </div>
        : 
        null
      }

      {isError ? <h1 className='error_title'>Comments wasn't found</h1> : null}
    </div>
  );
}

export default App;