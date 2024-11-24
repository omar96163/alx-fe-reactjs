import { screen , fireEvent , render } from "@testing-library/react";
import TodoList from "../components/TodoList";
import '@testing-library/jest-dom'


test('all todo', () => { 
    render(<TodoList />)
    expect(screen.getByText('item 1')).toBeInTheDocument()
    expect(screen.getByText('item 2')).toBeInTheDocument()
})


test('add todo', () => { 
    render(<TodoList />);
    const input = screen.getByPlaceholderText('add todo');
    const button = screen.getByText('add');

    fireEvent.change(input, { target: { value: 'new todo' } });
    fireEvent.click(button);

    expect(screen.getByText('new todo')).toBeInTheDocument();
})


test('toggle', () => {
    render(<TodoList />);
    const task = screen.getByText('item 1');
    fireEvent.click(task);
  
    expect(task).toHaveStyle('text-decoration: line-through');
});


test('delete', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('delete')[0];
    fireEvent.click(deleteButton);
  
    expect(screen.queryByText('item 1')).not.toBeInTheDocument();
});