import React, { Component } from 'react'
import { graphql, gql, compose } from 'react-apollo'
import Link from './Link'

class LinkList extends Component {
    
    _author(data) {
        
    }
    render() {
        // 1
        if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
            return <div>Loading</div>
        }

        // 2
        if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
            return <div>Error</div>
        }

        // 3
        if (this.props.allBooksQuery && this.props.allBooksQuery.loading){
            return <div>Loading</div>
        }
        const booksToRender = this.props.allBooksQuery.allBooks;
        const linksToRender = this.props.allLinksQuery.allLinks;

        return (
            <div>
                {linksToRender.map(link => (
                    <Link key={link.id} link={link} />
                ))}
                <h1>books below</h1>
                {booksToRender.map(book => (
                    <p key={book.id}>{book.name} - {book.author === null ? 'no author' : book.author.name}</p>
                    
                ))}
            </div>
        )
    }

}

// 1
const ALL_LINKS_QUERY = gql`
  # 2
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`
const ALL_BOOKS_QUERY = gql`
  # 2
  query AllBooksQuery {
    allBooks {
            id
            name
            description
        author{
        id
        name
        }
    }
  }
`

// 3
export default compose(
    graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }),
    graphql(ALL_BOOKS_QUERY, { name: 'allBooksQuery' })
)(LinkList)