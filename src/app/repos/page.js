'use client';
import RepoTable from './RepoTable';
import { Grid, Column } from '@carbon/react';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const rows = [
  {
    id: '1',
    name: 'carbon',
    createdAt: '2019-01-01',
    updatedAt: '2021-03-15',
    issueCount: '123',
    stars: '1,234',
    links: 'GitHub',
    description: 'Carbon Design System',
  },
  {
    id: '2',
    name: 'carbon-components',
    createdAt: '2018-05-12',
    updatedAt: '2021-02-20',
    issueCount: '456',
    stars: '5,678',
    links: 'GitHub',
    description: 'The Carbon Design System components',
  },
  {
    id: '3',
    name: 'carbon-components-react',
    createdAt: '2018-06-20',
    updatedAt: '2021-03-10',
    issueCount: '789',
    stars: '2,345',
    links: 'GitHub',
    description: 'React components for the Carbon Design System',
  },
];

export default function RepoPage() {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <RepoTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
}

// Made with Bob
