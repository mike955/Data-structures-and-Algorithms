/** 队列
 * 包含方法：
 *  - isEmpty(): 队列是否为空
 *  - size()： 队列元素个数
 *  - enqueue()：入队
 *  - dequeue()：出队
 *  - print()：输出队列中数据
 *  - front()：返回队列中第一个元素
 */

package Queue

import (
	"strconv"
	"strings"
)

func NewQueue() *Queue {
	return &Queue{[]int{}}
}

type Queue struct {
	items []int
}

func (q *Queue) IsEmpty() bool {
	if len(q.items) == 0 {
		return true
	} else {
		return false
	}
}

func (q *Queue) size() int {
	return len(q.items)
}

func (q *Queue) enqueue(element int) int {
	q.items = append(q.items, element)
	return len(q.items)
}

func (q *Queue) dequeue() interface{} {
	if len(q.items) == 0 {
		return nil
	} else {
		lastValue := q.items[len(q.items) - 1]
		q.items = q.items[:len(q.items) - 1]
		return lastValue
	}
}

func (q *Queue) print() string {
	text := []string{}
	for i := range q.items  {
		temText := strconv.Itoa(q.items[i])
		text = append(text, temText)
	}
	return strings.Join(text, ",")
}

func (q *Queue) front() interface{} {
	if len(q.items) == 0 {
		return nil
	} else {
		return q.items[0]
	}
}



