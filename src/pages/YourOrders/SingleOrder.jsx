

const SingleOrder = ({ order, handleDelete, handleUpdate, }) => {
  const { address, email, firstName, phone, status, date, _id } = order || {};
  console.log(order)
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <td className="ps-10">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {firstName}
      </th>
      <td className="px-6 py-4">{phone}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4">
        {status === "approved" ? (
          <span className="text-green-500">Appproved</span>
        ) : (
          <a
            onClick={() => handleUpdate(_id)}
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Confirm
          </a>
        )}
      </td>
    </tr>
  );
                }
  ;


export default SingleOrder;