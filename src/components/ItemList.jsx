import { Item } from "./Item"
import { Loader } from "./Loader"

export const ItemList = ({data}) => {

    return (
        <div className="item-list">
            {
            data.length > 0 ? 
            data.map(item => 
                    <Item key={item.id} data={item} />
            ) : <Loader loading={true}/>}
        </div>
    )
}