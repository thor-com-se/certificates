import sortByProperty from "./sortByProperty";

function DessertsList(props) {
  const desserts = props.data;
  const filteredDesserts = desserts.filter(item => item.calories <= 500);
  const sortedDesserts = sortByProperty(filteredDesserts, 'calories');
  return (
    <ul>
      { sortedDesserts && (
        sortedDesserts.map(item => {
          return <li>{`${item.name} - ${item.calories} cal`}</li>
        })
      )}
    </ul>
  );
}

export default DessertsList;
