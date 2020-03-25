import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import TodoList from './TodoList'


test('renders a todo-item', () => {
    const todo = {
        name: 'Go to the supermarket',
        complete: false
    }

    const component = render(
        <TodoList todo={todo} />
    )

    expect(component.container).toHaveTextContent(
        'Go to the supermarket'
    )

})

test('Clicking the button calls the onClick eventhandler once', () => {
    const todo = {
        name: 'Go to the supermarket',
        complete: false
    }
    const mockHandler = jest.fn()

    const component = render(
        <TodoList todo = {todo} onClick={mockHandler} />
    )
    const button = component.getByTestId('add')
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(1)
})

test('Clicking the button calls the onRemoveClick eventhandler once', () => {
    const todo = {
        name: 'Go to the supermarket',
        complete: false
    }
    const mockHandler = jest.fn()

    const component = render(
        <TodoList todo = {todo} onRemoveClick={mockHandler} />
    )
    const button = component.getByTestId('del')
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(1)
})