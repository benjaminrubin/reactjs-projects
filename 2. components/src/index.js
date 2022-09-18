import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

function App() {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    content={faker.lorem.sentence()}
                    timeAgo="Today at 5:00PM"
                    avatarImage={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>

                <CommentDetail
                    author={faker.name.firstName()}
                    content={faker.lorem.sentence()}
                    timeAgo="Today at 5:00PM"
                    avatarImage={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    content={faker.lorem.sentence()}
                    timeAgo="Today at 5:00PM"
                    avatarImage={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

