

export default function Stats({items}) {
    const numItems = items.length;
    const numPacked = items.filter((item)=> item.packed).length;
    const percentage = Math.round((numPacked/numItems) *100)
    console.log(percentage);
  return (
    <div>

        
        <footer className="stats">
            <em>
                {percentage === 100 ? "You are all set for the Trip :)" : `You have ${numItems} items on your list, and you have already packed ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    </div>
  )
}
