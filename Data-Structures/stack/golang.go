/** 栈
 * 包含方法：
 *  - isEmpty(): 队列是否为空
 *  - size()： 队列元素个数
 *  - push()：入队
 *  - pop()：出队
 *  - peak()：返回栈顶元素
 *  - clear(): 清楚栈顶元素
 *  - print()：输出队列中数据
 */

package Stack

import (
	"strconv"
	"strings"
)

func NewStack() *Stack {
	return &Stack{[]int{}}
}

type Stack struct {
	items []int
}

func (s *Stack) IsEmpty() bool {
	if len(s.items) == 0 {
		return true
	} else {
		return false
	}
}

func (s *Stack) size() int {
	return len(s.items)
}

func (s *Stack) push(element int) int {
	s.items = append(s.items, element)
	return len(s.items)
}

func (s *Stack) pop() interface{} {
	if len(s.items) == 0 {
		return nil
	} else {
		lastValue := s.items[len(s.items) - 1]
		s.items = s.items[:len(s.items) - 1]
		return lastValue
	}
}

func (s *Stack) peak() interface{} {
	if len(s.items) == 0 {
		return nil
	} else {
		lastValue := s.items[0]
		s.items = s.items[1:len(s.items)]
		return lastValue
	}
}

func (s *Stack) clear() bool {
	s.items = s.items[:0]
	return true
}

func (s *Stack) print() string {
	text := []string{}
	for i := range s.items {
		temText := strconv.Itoa(s.items[i])
		text = append(text, temText)
	}
	return strings.Join(text, ",")
}


