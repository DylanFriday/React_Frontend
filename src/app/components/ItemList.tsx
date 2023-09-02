function Item(props : any) {
  return (
    <div>
      <img src={'https://i.imgur.com/MK3eW3As.jpg'} />
      <br />
      <h2>{props.item}</h2>
    </div>
  );
}

export default function Itemlist({ items }: any) {
  const listItems = items.map((item: any, index: any) => (
    <Item key={index} item={item} />
  ));
  return <div>{listItems}</div>;
}
