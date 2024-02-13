/**
 * Validates a string value against a maximum length.
 * @param value The value to validate.
 * @param maxLength The maximum length allowed for the string.
 * @returns true if the value is a string and its length is less than or equal to maxLength, otherwise false.
 */
export const validateString = (value: unknown, maxLength: number): boolean => {
    return typeof value === "string" && value.length <= maxLength;
}

/**
 * Gets the error message from an error object or string.
 * @param error The error object or string.
 * @returns The error message as a string. If the error is not recognized, returns "Unknown error".
 */
export const getErrorMessage = (error: unknown): string => {
    let message: string;

    // If error is an instance of Error, get its message
    if (error instanceof Error) {
        message = error.message;
    }
    // If error is an object with 'message' property, convert it to string
    else if (error && typeof error === "object" && 'message' in error) {
        message = String(error.message);
    }
    // If error is a string, use it as message
    else if (typeof error === "string") {
        message = error;
    }
    // Default to "Unknown error"
    else {
        message = "Unknown error";
    }
    return message;
}
