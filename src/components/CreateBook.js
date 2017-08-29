import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import { GC_USER_ID } from '../constants'
class CreateBook extends Component {

    state = {
        description: '',
        name: ''
    }

    render() {
        return (
            <div>
                <div className='flex flex-column mt3'>
                    <h4>Store your fav book mamen</h4>
                    <input
                        className='mb2'
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                        type='text'
                        placeholder='Please Specify the name of the Book'
                    />
                    <input
                        className='mb2'
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })}
                        type='text'
                        placeholder='The description of the Book'
                    />
                </div>
                <button
                    onClick={() => this._createBook()}
                >
                    Submit
        </button>
            </div>
        )
    }
    _createBook = async () => {
        const authorId = localStorage.getItem(GC_USER_ID)
        const { description, name } = this.state;
        if (description === '' && name === ''){
            console.log('error bro');
        } else {
            await this.props.createBookMutation({
                variables: {
                    description,
                    name,
                    authorId
                }
            });
            console.log('success');
        }
    }
}

// 1
const CREATE_BOOK_MUTATION = gql`
  mutation CreateBookMutation($description: String!, $name: String!, , $authorId: ID!) {
    createBook(
      description: $description,
      name: $name,
      authorId: $authorId,
    ) {
      id
      createdAt
      name
      description
      author {
          id
          name
      }
    }
  }
`

// 3
export default graphql(CREATE_BOOK_MUTATION, { name: 'createBookMutation' })(CreateBook)