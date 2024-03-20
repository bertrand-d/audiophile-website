import { motion } from "framer-motion"

export default function NotFound() {
    return (
        <motion.section
            className="not-found max-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Oups ! Cette page n'existe pas</h1>
        </motion.section>
    )
}