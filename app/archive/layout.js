import React from 'react';

function ArchiveLayout({ archive, latest }) {
  return (
    <>
      <h1>ArchiveLayout</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </>
  );
}

export default ArchiveLayout;
