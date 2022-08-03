import React from "react";

interface Item {
  id: string;
  value: string;
}

export class List extends React.Component<{}, { items: Item[] }> {
  static allItems = [
    { id: "a", value: "apple" },
    { id: "o", value: "orange" },
    { id: "g", value: "grape" },
    { id: "p", value: "pear" }
  ];
  state = { items: [] as Item[] };
  addItem = () => {
    this.setState(({ items }) => ({
      items: [
        ...items,
        List.allItems.find((i) => !items.some((x) => x.id == i.id)) as Item
      ]
    }));
  };

  removeItem = (item: Item) => {
    this.setState(({ items }) => ({
      items: items.filter((i) => i !== item)
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <div className="m-10">
        <button
          disabled={items.length >= List.allItems.length}
          onClick={this.addItem}
          className="px-2 my-2 shadow rounded border border-1 border-gray-400"
        >
          +
        </button>
        {items.map((i, index) => (
          <div className="my-2 flex justify-between align-center w-72">
            <button
              onClick={() => this.removeItem(i)}
              className="px-2 shadow rounded border border-1 border-gray-400"
            >
              -
            </button>
            <p>{i.value}:</p>
            <input className="border border-1 border-gray-400 rounded px-1" />
          </div>
        ))}
      </div>
    );
  }
}
