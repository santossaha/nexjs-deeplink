export async function getServerSideProps(context) {
    const { id } = context.params;
    // Fetch or handle data based on `id`
    return {
      props: { id }, // Pass data to the page
    };
  }
  
  export default function ListItemPage({ id }) {
    return (
      <div>
        <h1>Item ID: {id}</h1>
      </div>
    );
  }