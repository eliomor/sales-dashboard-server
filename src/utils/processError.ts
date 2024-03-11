export const processError = (action: string, entity: string, originalError: unknown): Error => {
  const baseMessage = `Failed to ${action} ${entity}.`;
  if (originalError instanceof Error) {
    const errorMessage = `${baseMessage} ${originalError.message}`;
    console.error(errorMessage);
    return new Error(errorMessage);
  }
  const errorMessage = `${baseMessage} Unknown error: ${originalError}`;
  console.error(errorMessage);
  return new Error(errorMessage);
};
