export const formStyles = {
    display: 'flex',
    gap: 2,
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'flex-start',
    marginBottom: 3,
};

export const textFieldStyles = {
    description: {
      flexGrow: 2, // Allow the description field to grow more
    },
    dueDate: {
      width: { xs: '100%', sm: '180px', md: '240px' }, // Responsive width for the due date field
    },
};

export const buttonStyles = {
    minWidth: '120px',
    height: '56px', // Match the height of the input fields
};