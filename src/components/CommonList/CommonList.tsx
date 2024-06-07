interface CommonListProps<T> {
	items: T[]
	renderItem: (item: T) => React.ReactNode
	_className: string
}

const CommonList = <T,>({
	items,
	renderItem,
	_className,
}: CommonListProps<T>) => {
	return <ul className={_className}>{items.map(renderItem)}</ul>
}

export default CommonList
