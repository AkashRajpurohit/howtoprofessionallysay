import { trackEvent } from 'lib/analytics';
import { Printer } from 'react-feather';

const PrintPageButton = () => {
  const printPDF = () => {
    trackEvent({ name: 'Click', data: { value: 'Print PDF' } });
    window.print();
  };

  return (
    <div className="flex items-center rounded-md bg-gray-700 p-2">
      <button
        aria-label="Print the page as PDF"
        title="Print the page as PDF"
        onClick={printPDF}
      >
        <Printer size={24} />
      </button>
    </div>
  );
};

export default PrintPageButton;
