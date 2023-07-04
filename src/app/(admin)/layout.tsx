'use client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>RW BUY</title>
        <meta title='description' content='Your go-to online store'></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
