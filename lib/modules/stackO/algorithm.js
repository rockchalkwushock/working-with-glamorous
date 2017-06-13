/**
 * @public
 * @author Cody Brunner - rockchalkwushock@icloud.com
 *
 * @func algorithm(arg)
 * @desc Function for processing raw API data & returning 10 objects
 *       containing specified data.
 * @param {Array<Object>} items - Array of query objects from request.
 * @returns {Array<Object>} acc - Array of filtered objects.
 */
export const algorithm = ({ items }) =>
  items.reduce((acc, val, i) => {
    let obj = Object.create({})
    obj = {
      title: val.title,
      link: val.link
    }
    if (i < 10) {
      acc.push(obj)
    }
    return acc
  }, [])
