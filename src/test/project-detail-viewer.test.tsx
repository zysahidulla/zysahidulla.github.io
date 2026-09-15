import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectDetailPage from '../pages/ProjectDetail';

describe('ProjectDetailPage image viewer', () => {
  it('opens the image viewer and supports previous, next, and back actions', () => {
    render(
      <MemoryRouter initialEntries={['/projects/logos-logic-simulator']}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    const galleryImage = screen.getAllByRole('button', { name: /open logos: logic simulator image 1/i })[0];
    fireEvent.click(galleryImage);

    expect(screen.getByRole('button', { name: /back to gallery/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /previous image/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next image/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /next image/i }));
    expect(screen.getByRole('button', { name: /back to gallery/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /back to gallery/i }));
    expect(screen.queryByRole('button', { name: /back to gallery/i })).not.toBeInTheDocument();
  });

  it('shows the live action for publicly deployed projects', () => {
    render(
      <MemoryRouter initialEntries={['/projects/pet-adoption-system']}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /live/i })).toHaveAttribute('href', 'https://zysahidulla.github.io/adoption-pawtal/');
  });
});
