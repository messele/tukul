/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInquiry = /* GraphQL */ `
  query GetInquiry($id: ID!) {
    getInquiry(id: $id) {
      id
      name
      email
      phone
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listInquiries = /* GraphQL */ `
  query ListInquiries(
    $filter: ModelInquiryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInquiries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        message
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInquiries = /* GraphQL */ `
  query SyncInquiries(
    $filter: ModelInquiryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInquiries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        phone
        message
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
