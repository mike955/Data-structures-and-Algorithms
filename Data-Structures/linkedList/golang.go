/** 链表
 * 包含方法：
 *  - push(): 队列是否为空
 *  - getElementAt()： 队列元素个数
 *  - insert()：入队
 *  - removeAt()：出队
 *  - remove()：输出队列中数据
 *  - indexOf()：返回队列中第一个元素
 *  - isEmpty()：输出队列中数据
 *  - size()：返回队列中第一个元素
 *  - getHead()：输出队列中数据
 *  - clear()：返回队列中第一个元素
 *  - toArray()：输出队列中数据
 *  - toString()：返回队列中第一个元素
 *  - reverse()：返回队列中第一个元素
 */

package LinkedList

type LinkedListNode struct {
	element int
	next interface{}
}

type LinkedList struct {
	head interface{}
	length int
}

func newLinkedList() *LinkedList  {
	return &LinkedList{
		head: nil,
		length: 0,
	}
}

func (link *LinkedList) Push(element int)  {
	newNode := LinkedListNode{
		element: element,
		next:    nil,
	}
	if link.head == nil {
		link.head = newNode
	} else {
		current := link.head
		for current.next {

		}
	}
}

func (link *LinkedList) GetElementAt(index int)  {
}

func (link *LinkedList) Insert(element int)  {
}

func (link *LinkedList) RemoveAt(index int)  {

}

func (link *LinkedList) Remove(element int)  {

}

func (link *LinkedList) IndexOf(element int)  {

}

func (link *LinkedList) IsEmpty()  {

}

func (link *LinkedList) Size()  {

}

func (link *LinkedList) GetHead()  {

}

func (link *LinkedList) Clear()  {

}

func (link *LinkedList) ToArray()  {

}

func (link *LinkedList) ToString()  {

}

func (link *LinkedList) Reverse()  {

}
