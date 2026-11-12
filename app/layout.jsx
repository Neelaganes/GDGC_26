import './globals.css';

export const metadata = {
  title: 'GDG on Campus VIIT — Learn. Build. Share.',
  description: 'Google Developer Groups on Campus at VIIT, Vizag. Learn, build, and share with a community of curious developers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
