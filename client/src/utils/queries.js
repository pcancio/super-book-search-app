import { gql } from "@apollo/client";

export const GET_ME = gql`
query me {
    _id
    username
    email
    bookCount
    SavedBooks {
        _id
        bookId
        title
        description
        image
        link
        authors
    }
}
}
`;
